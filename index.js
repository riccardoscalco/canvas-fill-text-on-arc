export default fillTextOnArc;

function fillTextOnArc(ctx, text, cx, cy, r, spacing) {
	for (let i = 0; i < text.length; i++) {
		const alpha = (2 * Math.PI) * (i * spacing);
		fillCharOnArc(ctx, text[i], cx, cy, r, alpha);
	}
}

function fillCharOnArc(ctx, char, cx, cy, r, alpha) {
	const x = cx + (r * Math.cos(alpha));
	const y = cy + (r * Math.sin(alpha));
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(alpha + (Math.PI / 2));
	ctx.fillText(char, 0, 0);
	ctx.restore();
}
