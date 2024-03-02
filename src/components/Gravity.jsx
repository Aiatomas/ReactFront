import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Gravity = () => {
    const boxRef = useRef(null);

    useEffect(() => {
        const engine = Matter.Engine.create();
        const { world } = engine;
        const render = Matter.Render.create({
            element: boxRef.current,
            engine: engine,
            options: {
                width: 800, // Встановіть фіксовану ширину або використовуйте window.innerWidth для динамічного розміру
                height: 600, // Так само для висоти
                background: '#080808',
                wireframes: false,
            },
        });

        // Створення та додавання границь
        const ground = Matter.Bodies.rectangle(400, 590, 810, 60, { isStatic: true, render: { fillStyle: '#080808' } });
        const wallLeft = Matter.Bodies.rectangle(-30, 300, 60, 600, { isStatic: true });
        const wallRight = Matter.Bodies.rectangle(830, 300, 60, 600, { isStatic: true });
        const roof = Matter.Bodies.rectangle(400, -30, 810, 60, { isStatic: true });

        // Приклад створення і додавання кастомного об'єкта
        const customObject = Matter.Bodies.circle(400, 100, 30, {
            render: {
                fillStyle: '#EDDC8C', // Використовуйте ваші кольори та стилі
            },
        });

        // Додавання всіх об'єктів до світу
        Matter.World.add(world, [ground, wallLeft, wallRight, roof, customObject]);

        // Керування мишею (залишаємо без змін)
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });

        // const customObject = Matter.Bodies.circle(400, 100, 30, {
        //     render: {
        //         fillStyle: '#EDDC8C',
        //     },
        // });

        // Додання нового круга
        const additionalCircle = Matter.Bodies.circle(200, 200, 50, {
            render: {
                fillStyle: '#F88C24', // Виберіть свій кольор
            },
        });

        // Додання прямокутника
        const rectangle = Matter.Bodies.rectangle(600, 300, 60, 120, {
            render: {
                fillStyle: '#24ABF2'  // Виберіть свій кольор
            }
        });
        Matter.World.add(world, [ground, wallLeft, wallRight, roof, customObject, additionalCircle, rectangle]);

        // Запуск двигуна і рендерера
        Matter.Engine.run(engine);
        Matter.Render.run(render);
        render.mouse = mouse;

        return () => {
            Matter.Engine.clear(engine);
            Matter.Render.stop(render);
            render.canvas.remove();
        };
    }, []);

    return <div ref={boxRef} style={{ width: '800px', height: '600px' }} />; // Стилі можна адаптувати під ваші потреби
};

export default Gravity;
