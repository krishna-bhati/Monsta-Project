const countryModel = require("../../models/country.model");

// Create Api
exports.create = (request, response) => {

    var data = request.body;

    try {
        var saveData = new countryModel(data).save()
            .then((result) => {
                const data = {
                    _status: true,
                    _message: 'Record created successfully',
                    _data: result,
                }
                response.send(data);
            })
            .catch((error) => {

                var errors = [];

                for (var i in error.errors) {
                    errors.push(`${i} : ${error.errors[i].message}`)
                }

                const data = {
                    _status: false,
                    _message: errors.join(","),
                    _data: null
                }
                response.send(data);
            })
    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: null,
        }
        response.send(data);
    }
}

// View Api
exports.view = async (request, response) => {

    var current_page = 1;
    var total_records = 0;
    var total_pages = 0;
    var limit = 10;
    var skip = 0;

    if (request.body) {
        if (request.body.limit != '' && request.body.limit != undefined) {
            limit = parseInt(request.body.limit) || 10
        }

        if (request.body.page != '' && request.body.page != undefined) {
            skip = (request.body.page - 1) * limit;
            current_page = parseInt(request.body.page)
        }
    }

    try {
        // Initialize base filter
        const addCondition = [
            {
                deleted_at: null,
            }
        ];

        const orCondition = [];

        if (request.body) {
            if (request.body.name != undefined && request.body.name != '') {
                var name = new RegExp(request.body.name, "i");
                addCondition.push({ name: name });
            }
        }

        if (addCondition.length > 0) {
            var filter = {
                $and: addCondition
            }
        } else {
            var filter = {}
        }
        if (orCondition.length > 0) {
            filter.$or = orCondition;
        }

        total_records = await countryModel.find(filter).countDocuments();

        await countryModel.find(filter).select('name status order').skip(skip).limit(limit).sort({ _id: 'desc' })
            .then((result) => {
                if (result.length > 0) {

                    var paginate = {
                        current_page: current_page,
                        total_pages: Math.ceil(total_records / limit),
                        total_records: total_records,
                    }

                    const data = {
                        _status: true,
                        _message: 'Record found successfully',
                        _paginate: paginate,
                        _data: result,

                    }
                    response.send(data);
                } else {
                    const data = {
                        _status: false,
                        _message: 'Record not found',
                        _data: result,
                    }
                    response.send(data);
                }

            })
            .catch((error) => {
                const data = {
                    _status: false,
                    _message: error.message,
                    _data: [],
                }
                response.send(data);
            })
    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: [],
        }
        response.send(data);
    }
}

// Details Api
exports.details = async (request, response) => {
    try {

        await countryModel.findById(request.params.id)
            .then((result) => {
                if (result) {
                    const data = {
                        _status: true,
                        _message: 'Record found successfully',
                        _data: result,

                    }
                    response.send(data);
                } else {
                    const data = {
                        _status: false,
                        _message: 'Record does not found',
                        _data: result,
                    }
                    response.send(data);
                }
            })
            .catch((error) => {
                const data = {
                    _status: false,
                    _message: error.message,
                    _data: null,
                }
                response.send(data);
            })
    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: null,
        }
        response.send(data);
    }
}

// Update Api
exports.update = async (request, response) => {
    try {

        var data = request.body;
        data.updated_at = Date.now()

        var saveData = await countryModel.updateOne(
            {
                _id: request.params.id,
            },
            {
                $set: data,
            }
        )
            .then((result) => {
                if (result.matchedCount) {
                    const data = {
                        _status: true,
                        _message: 'Record updated successfully',
                        _data: result,
                    }
                    response.send(data);
                } else {
                    const data = {
                        _status: false,
                        _message: 'Record does not exist',
                        _data: result,
                    }
                    response.send(data);
                }
            })
            .catch((error) => {

                var errors = [];

                for (var i in error.errors) {
                    errors.push(`${i} : ${error.errors[i].message}`)
                }

                const data = {
                    _status: false,
                    _message: errors.join(","),
                    _data: null
                }
                response.send(data);
            })
    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: null,
        }
        response.send(data);
    }
}

// Delete or Destroy Api
exports.destroy = async (request, response) => {
    try {

        var data = {
            deleted_at: Date.now()
        }

        var saveData = await countryModel.updateMany({
            _id: request.body.ids
        }, {
            $set: data
        })
            .then((result) => {
                if (result.matchedCount) {
                    const data = {
                        _status: true,
                        _message: 'Record deleted successfully !!',
                        _data: result
                    }
                    response.send(data);
                } else {
                    const data = {
                        _status: false,
                        _message: 'Record does not exit !!',
                        _data: result
                    }
                    response.send(data);
                }

            })
            .catch((error) => {

                var errors = [];

                for (var i in error.errors) {
                    errors.push(error.errors[i].message);
                }

                const data = {
                    _status: false,
                    _message: errors.join(","),
                    _data: null
                }
                response.send(data);
            });

    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: null
        }
        response.send(data);
    }
}

// Change Status Api
exports.changeStatus = async (request, response) => {
    try {
        var saveData = await countryModel.updateMany({
            _id: request.body.ids
        }, [{
            $set: {
                status: {
                    $not: "$status"
                }
            }
        }])
            .then((result) => {
                if (result.matchedCount) {
                    const data = {
                        _status: true,
                        _message: 'Record deleted succussfully !!',
                        _data: result
                    }
                    response.send(data);
                } else {
                    const data = {
                        _status: false,
                        _message: 'Record does not exit !!',
                        _data: result
                    }
                    response.send(data);
                }

            })
            .catch((error) => {

                var errors = [];

                for (var i in error.errors) {
                    errors.push(error.errors[i].message);
                }

                const data = {
                    _status: false,
                    _message: errors.join(","),
                    _data: null
                }
                response.send(data);
            });

    } catch (error) {
        const data = {
            _status: false,
            _message: error.message,
            _data: null
        }
        response.send(data);
    }
}