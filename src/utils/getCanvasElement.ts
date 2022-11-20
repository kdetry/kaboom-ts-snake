export const getCanvasElement = () => {
  const canvasElement = document.getElementById("app") as HTMLCanvasElement;
  canvasElement.focus();
  return canvasElement;
};
