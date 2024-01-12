import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 m-2 flex-grow-1" style={{ borderRadius: '10px' }}>
            <div className="font-bold text-lg mb-2 adminFont">{title}</div>
            <p className="adminFont">{content}</p>
        </div>
    );
};

const Desktop = () => {
    return (
        <div className="d-flex flex-column bg-gray-200 p-4 mt-0 flex-grow-1 adminBackGround">
            <div className="d-flex mt-0">
                <Card className="mt-0" title="К-сть нових лідів" content="0"/>
                <Card className="mt-0" title="К-сть нових клієнтів" content="0"/>
                <Card className="mt-0" title="К-сть нових угод" content="0"/>
                <Card className="mt-0" title="К-сть нових завдань" content="0"/>
                {/* ... other cards */}
            </div>
            <div className="d-flex flex-grow-1">
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