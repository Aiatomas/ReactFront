import React, { useState } from 'react';
import styled from 'styled-components';

const styles = {
    sidebarContainer: {
        backgroundColor: '#343a40',
        width: '256px',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    },
    menuItem: {
        padding: '10px 15px',
        cursor: 'pointer',
    },
    menuItemHover: {
        backgroundColor: '#495057',
    },
    menuItemActive: {
        backgroundColor: '#17a2b8',
        color: 'white',
    },
    collapsibleContainer: {
        backgroundColor: '#343a40',
        display: 'none',
    },
    collapsibleContainerOpen: {
        display: 'block',
    },
    notification: {
        float: 'right',
        color: '#dc3545',
    }
};

const SidebarAi = () => {
    const [activeItem, setActiveItem] = useState('Робочий стіл');
    const [isContragentsOpen, setIsContragentsOpen] = useState(false);

    const handleMenuItemClick = (name) => {
        if (name === 'Контрагенти') {
            setIsContragentsOpen(!isContragentsOpen);
        } else {
            setActiveItem(name);
        }
    };

    return (
        <div style={styles.sidebarContainer}>
            {/* Repeated MenuItem blocks for each item */}
            <div
                style={{
                    ...styles.menuItem,
                    ...(activeItem === 'Робочий стіл' ? styles.menuItemActive : {}),
                }}
                onClick={() => handleMenuItemClick('Робочий стіл')}
            >
                Робочий стіл
            </div>

            <div
                style={{
                    ...styles.menuItem,
                    ...(activeItem === 'Контрагенти' ? styles.menuItemActive : {}),
                }}
                onClick={() => handleMenuItemClick('Контрагенти')}
            >
                Контрагенти
            </div>

            <div style={{
                ...styles.collapsibleContainer,
                ...(isContragentsOpen ? styles.collapsibleContainerOpen : {}),
            }}>
                <div style={styles.menuItem} onClick={() => setActiveItem('Люди')}>Люди</div>
                <div style={styles.menuItem} onClick={() => setActiveItem('Клиенти')}>Клиенти</div>
                <div style={styles.menuItem} onClick={() => setActiveItem('Підприємства')}>Підприємства</div>
                <div style={styles.menuItem} onClick={() => setActiveItem('Постачальники')}>Постачальники</div>
            </div>

            {/* Add additional MenuItems here as above */}

            <div
                style={{
                    ...styles.menuItem,
                    ...(activeItem === 'Завдання' ? styles.menuItemActive : {}),
                }}
                onClick={() => handleMenuItemClick('Завдання')}
            >
                Завдання <span style={styles.notification}>1</span>
            </div>

            {/* Continue adding MenuItems for each item with similar pattern */}

        </div>
    );
};

export default SidebarAi;