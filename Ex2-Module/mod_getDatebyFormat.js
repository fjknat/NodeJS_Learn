exports.fcDateTime = function () {
    return Date();
};

exports.fcDateTimeFormat = formatD => {
    let v_date = new Date();
    if (typeof formatD !== 'undefined') {
        switch (formatD) {
            case 'mm/dd/yyyy':
                return [v_date.getDay(), v_date.getMonth() + 1, v_date.getFullYear()].join('/');
                break;
            case 'date':
                return [v_date.getDay(), v_date.getMonth() + 1, v_date.getFullYear()].join('/');
                break;
            case 'hh:mm:ss':
                return [v_date.getHours(), v_date.getMinutes(), v_date.getSeconds()].join(':');
                break;
            case 'time':
                return [v_date.getHours(), v_date.getMinutes(), v_date.getSeconds()].join(':');
                break;
            case 'mm/dd/yyyy hh:mm:ss':
                return [v_date.getDay(), v_date.getMonth() + 1, v_date.getFullYear()].join('/')
                    + ' '
                    + [v_date.getHours(), v_date.getMinutes(), v_date.getSeconds()].join(':');
            case 'datetime':
                return [v_date.getDay(), v_date.getMonth() + 1, v_date.getFullYear()].join('/')
                    + ' '
                    + [v_date.getHours(), v_date.getMinutes(), v_date.getSeconds()].join(':');
            default:
                'Format is incorrect';
        };
    } else {
        return [v_date.getDay(), v_date.getMonth() + 1, v_date.getFullYear()].join('/')
            + ' '
            + [v_date.getHours(), v_date.getMinutes(), v_date.getSeconds()].join(':');
    }
};