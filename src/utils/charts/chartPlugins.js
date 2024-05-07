export const currentTimePosition = {
    id: "currentTimePosition",

    afterDatasetsDraw(
        { ctx, chartArea: { top, bottom }, scales: { x } },
        args,
        options
    ) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = options.color || "black";
        ctx.lineWidth = options.lineThickness || 1;
        const currentDate = new Date().setHours(0, 0, 0, 0);
        ctx.moveTo(x.getPixelForValue(currentDate), top);
        ctx.lineTo(x.getPixelForValue(currentDate), bottom);
        ctx.stroke();
        ctx.restore();
    },
};
