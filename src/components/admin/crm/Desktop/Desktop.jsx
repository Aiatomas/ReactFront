import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 m-2">
            <div className="font-bold text-lg mb-2">{title}</div>
            <p>{content}</p>
        </div>
    );
};

const Desktop = () => {
    return (
        <div className="d-flex flex-column bg-gray-200 p-4">
            <div className="d-flex">
                <Card title="К-сть нових лідів" content="0"/>
                <Card title="К-сть нових клієнтів" content="0"/>
                <Card title="К-сть нових угод" content="0"/>
                <Card title="К-сть нових завдань" content="0"/>
                {/* ... other cards */}
            </div>
            <div className="d-flex">
                <Card title="Джерела угод" content="Недостатньо даних для генерації"/>
                <Card title="Структура доходів" content="Недостатньо даних для генерації"/>
                {/* ... other cards */}
            </div>
            <div className="d-flex">
                <Card title="Завдання" content=""/>
            </div>
        </div>
    );
};

export default Desktop;