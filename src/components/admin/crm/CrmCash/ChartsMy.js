import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ChartComponent = ({ aapl }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!aapl || aapl.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const width = 928;
        const height = 500;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        const x = d3.scaleLinear(d3.extent(aapl, d => d.count), [marginLeft, width - marginRight]);
        const y = d3.scaleLinear([0, d3.max(aapl, d => d.price)], [height - marginBottom, marginTop]);
        const line = d3.line()
            .x(d => x(d.count))
            .y(d => y(d.price));

        svg.attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Daily close ($)"));

        svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line(aapl));
    }, [aapl]);

    return <svg ref={svgRef} />;
};

export default ChartComponent;

// що за таке відчуття яке є інтерпритацією для глядача причини опису такого характеру: видно тор(бублик)
// так якщо б глядач який бачить його був точкою на поверхні бублика та бачить по середині центр бублика
// який виглядая як колонна що збираясь у вузьку перетинку звідкись ззаду, де вона розходиться в нескінченність,
//     двома конусами, що зверху та знизу звужують усе що збираеться у ту саму вузьку точку
// (де у бублика дірка зазвичай)