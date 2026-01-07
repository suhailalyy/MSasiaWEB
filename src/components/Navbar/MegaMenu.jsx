import React from 'react';
import { NAV_MENU_DATA } from './NavbarData';

const MegaMenu = ({ activeMenu, isVisible, onMouseEnter, onMouseLeave }) => {
    if (!activeMenu || !isVisible) return null;

    const menuData = NAV_MENU_DATA[activeMenu];
    if (!menuData) return null;

    return (
        <>
            <div
                className="fixed top-[56px] left-0 w-full h-4 z-[9998]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />

            {/* SIMPLE AND CLEAN - MINIMAL SPACE */}
            <div
                className="fixed top-[76px] left-1/2 z-[9999]"
                style={{
                    transform: 'translateX(-50%)',
                    width: 'fit-content'
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="bg-white border border-gray-300">
                    <div className="flex divide-x divide-gray-200">
                        {menuData.columns.map((column, colIdx) => (
                            <div key={colIdx} className="min-w-0">
                                {column.title && (
                                    <div className="border-b border-gray-200 px-2 py-1">
                                        <div className="text-[11px] font-bold text-gray-900 uppercase">
                                            {column.title}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    {column.items.map((item, itemIdx) => (
                                        <a
                                            key={itemIdx}
                                            href="#"
                                            className="block text-[11px] text-gray-700 hover:text-[#e85d2d] px-2 py-1 hover:bg-gray-50"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenu;
