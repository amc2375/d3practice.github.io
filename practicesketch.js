water = d3.csv("waterdata.csv")

example = {
	const svg = d3.select(DOM.svg(1000, 1000));
	svg.selectAll("bubbles")
		.data(water)
		.enter().append("bubbles")
			.attr("cx", (d, i) => (i+1)*100)
			.attr("cy", 100)
			.attr("r", 0)
		.transition().duration(750)
			.attr("r", d=>d);

	return svg.node();
}


