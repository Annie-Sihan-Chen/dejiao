function checkResult(status, succeedInfo, failedInfo, element) {
    if (status === 200) {
        GrowlNotification.notify({
            title: status,
            description: succeedInfo,
            type: 'success',
            position: 'top-right',
            closeTimeout: 0
        });
        if (element !== null){
            element.hide();
            setTimeout(function () {
                location.reload()
            }, 1000);
        }
    } else if (status === 400) {
        GrowlNotification.notify({
            title: status,
            description: failedInfo,
            type: 'error',
            position: 'top-right',
            closeTimeout: 0
        });
    }
}

function checkResultWithLocation(status, succeedInfo, failedInfo, url) {
    if (status === 200) {
        setTimeout(function () {
            self.location = url;
        }, 1000);
        GrowlNotification.notify({
            title: status,
            description: succeedInfo,
            type: 'success',
            position: 'top-right',
            closeTimeout: 0
        });
    } else if (status === 400) {
        GrowlNotification.notify({
            title: status,
            description: failedInfo,
            type: 'error',
            position: 'top-right',
            closeTimeout: 0
        });
    }
}
function errorNotice(status, info) {
    GrowlNotification.notify({
        title: status,
        description: info,
        type: 'error',
        position: 'top-right',
        closeTimeout: 0
    });
}
function successNotice(status, info) {
    GrowlNotification.notify({
        title: status,
        description: info,
        type: 'success',
        position: 'top-right',
        closeTimeout: 0
    });
}
function warningNotice(status, info) {
    GrowlNotification.notify({
        title: status,
        description: info,
        type: 'warning',
        position: 'top-right',
        closeTimeout: 0
    });
}
