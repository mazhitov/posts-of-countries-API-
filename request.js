const request = config => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        if (this.status >= 200 && this.status < 300) {
            config.success(this.responseText);
        } else {
            config.error(this.status);
        }

    });
    xhr.addEventListener('error', function () {
        config.error('No Internet');
    });
    xhr.addEventListener('timeout', function () {
        config.error('Timeout');
    });
    xhr.open(config.method, config.url);
    xhr.send();
};