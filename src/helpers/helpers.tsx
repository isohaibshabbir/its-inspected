import { RegularityObj, NumRadioCheckboxDescRegularity } from "../types";

export function getPrice(value: number, currency: string, options?: Intl.NumberFormatOptions): string {
  const userLocale =
    (navigator?.languages?.length &&
      navigator.languages[0]) ||
    navigator.language || "en";


  // TODO: Try with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  return value.toLocaleString(userLocale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
    ...options,
  });
}

export function getValueAndCurrency(object: NumRadioCheckboxDescRegularity, regularityObj: RegularityObj): [number, string] {
  const regularity = regularityObj.value;
  return [
    object[regularity].value,
    object[regularity].currency,
  ];
}

export const camera = (function () {
  let width = 0;
  let height = 0;

  const createObjects = function () {
      const video = document.createElement('video');
      video.id = 'video';
      video.width = width;
      video.height = height; // Fix the height property
      video.autoplay = true;
      document.body.appendChild(video);

      const canvas = document.createElement('canvas');
      canvas.id = 'canvas';
      canvas.width = width;
      canvas.height = height; // Fix the height property
      document.body.appendChild(canvas);
  }

  return {
      video: null as HTMLVideoElement | null,
      context: null as CanvasRenderingContext2D | null,
      canvas: null as HTMLCanvasElement | null,

      startCamera: function (w: number = 680, h: number = 480): void {
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              width = w;
              height = h;

              createObjects();

              // Safely cast the result of getElementById
              this.video = document.getElementById('video') as HTMLVideoElement | null;
              this.canvas = document.getElementById('canvas') as HTMLCanvasElement | null;

              // Ensure that canvas is found and has a context
              if (this.canvas) {
                  this.context = this.canvas.getContext('2d');
              }

              if (this.video) {
                  (function (video: HTMLVideoElement) {
                      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                          video.srcObject = stream;
                          video.play();
                      });
                  })(this.video);
              }
          }
      },

      takeSnapshot: function (): void {
          if (this.context && this.video) {
              this.context.drawImage(this.video, 0, 0, width, height);
          } else {
              console.error("Camera or context is not initialized");
          }
      }
  };
})();
