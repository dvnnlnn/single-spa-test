import * as singleSpa from 'single-spa';

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

singleSpa.registerApplication(
  'child-1',
  async () => {
    await runScript('http://127.0.0.1:8081/js/chunk-vendors.js');
    await runScript('http://127.0.0.1:8081/js/app.js');
    return window.singleVue;
  },
  (location) => location.pathname.startsWith('/child-1')
);

singleSpa.registerApplication(
  'child-2',
  async () => {
    await runScript('http://127.0.0.1:8082/js/chunk-vendors.js');
    await runScript('http://127.0.0.1:8082/js/app.js');
    return window.singleVue;
  },
  (location) => location.pathname.startsWith('/child-2')
);

singleSpa.start();
