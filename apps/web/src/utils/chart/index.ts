import { colors } from 'config/chart';

const generateGradient = (ctx: any, chartArea: any): string => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0.9, colors.blue.default);
    gradient.addColorStop(0.2, colors.blue.lightBlue);
  }
  return gradient;
};

export { generateGradient };
