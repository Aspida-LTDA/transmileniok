export async function getCamera() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasCamera = devices.some(device => device.kind === 'videoinput');
      /* console.log(devices);
      console.log(hasCamera); */
      return hasCamera;
    } catch (error) {
      /* console.error(error); */
      return false;
    }
  }
  