import { ChartOptions, Plugin } from 'chart.js';


const colors = {
  blue: {
    default: 'rgba(123, 223, 242, 1)',
    lightBlue: 'rgba(123, 223, 242, 1)',
    stroke: '#626262',
  },
};

const options: ChartOptions = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: false,
  interaction: {
    mode: 'nearest',
    intersect: false,
    axis: 'x',
  },
};

const plugins: Plugin[] = [
  {
    id: 'tooltipLine',
    beforeDraw: (chart): void => {
      const activeEle = chart.getActiveElements();
      if (activeEle.length <= 0) return;
      const { x, y } = activeEle[0].element;
      const { ctx, scales } = chart;
      const topY = scales.y.top;
      const bottomY = scales.y.bottom;
      const leftX = scales.x.left;
      const rightX = scales.x.right;

      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.blue.stroke;

      ctx.save();
      ctx.beginPath();

      // Draw vertical line

      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.setLineDash([2, 3]);
      ctx.stroke();

      // Draw horizontal line
      ctx.beginPath();
      ctx.moveTo(leftX, y);
      ctx.lineTo(rightX, y);
      ctx.stroke();

      ctx.globalCompositeOperation = 'destination-over';
      ctx.restore();
    },
  },
];

export { colors, options, plugins };