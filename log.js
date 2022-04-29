document.querySelector('#button').addEventListener('click', logWarning);

    function logWarning() {
        console.log('Message');
        console.warn('Attention!');
        console.error('ERROR');
    }