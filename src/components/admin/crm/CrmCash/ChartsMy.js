import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const ChartComponent = ({ aapl }) => {
    const svgRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 928, height: 500 });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: svgRef.current.clientWidth,
                height: svgRef.current.clientHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!aapl || aapl.length === 0) return;

        const svg = d3.select(svgRef.current);
        const { width, height } = dimensions;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        const xScale = d3.scaleLinear(d3.extent(aapl, d => d.count), [marginLeft, width - marginRight]);
        const yScale = d3.scaleLinear([0, d3.max(aapl, d => d.price)], [height - marginBottom, marginTop]);

        const xAxis = d3.axisBottom(xScale);
        svg.select('.xAxis').call(xAxis);

        const yAxis = d3.axisLeft(yScale);
        svg.select('.yAxis').call(yAxis);

        const line = d3.line()
            .x(d => xScale(d.count))
            .y(d => yScale(d.price));

        svg.select('.line')
            .datum(aapl)
            .attr('d', line);
    }, [aapl, dimensions]);

    return (
        <svg ref={svgRef} width="100%" height="500">
            <path className="line" fill="none" stroke="steelblue" strokeWidth="1.5" />
            <g className="xAxis" transform={`translate(0, ${dimensions.height - 30})`} />
            <g className="yAxis" transform={`translate(${40},0)`} />
        </svg>
    );
};

export default ChartComponent;