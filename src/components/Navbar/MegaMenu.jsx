import React from 'react';
import { NAV_MENU_DATA } from './NavbarData';

const MegaMenu = ({ activeMenu, isVisible, onMouseEnter, onMouseLeave }) => {
    // 1. Basic Validation
    if (!activeMenu || !isVisible) return null;

    const menuData = NAV_MENU_DATA[activeMenu];
    if (!menuData) return null;

    return (
        <>
            {/* --- HOVER BRIDGE --- 
                Ye invisible div gap ko fill karta hai taaki mouse neeche late waqt menu band na ho 
            */}
            <div
                className="fixed top-[56px] left-0 w-full h-6 z-[9998]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />

            {/* --- MAIN MENU CONTAINER --- 
                Fixed position, Full Width Background, Vertical Animation
            */}
            <div
                className="fixed top-[76px] left-0 w-full z-[9999] bg-white border-b border-gray-200 shadow-xl animate-dropdown"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {/* --- CONTENT CONSTRAINT --- 
                    Ye sabse important part hai. 
                    max-w-[1280px] content ko failne se rokega.
                    mx-auto content ko center mein rakhega.
                */}
                <div className="max-w-[1280px] mx-auto px-6 py-8">

                    {/* Grid Layout for Columns */}
                    <div className="flex items-start gap-8">
                        {menuData.columns.map((column, colIdx) => (
                            <div key={colIdx} className="flex-1 min-w-0">

                                {/* Column Title */}
                                {column.title && (
                                    <div className="mb-4 border-b border-gray-100 pb-2">
                                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                                            {column.title}
                                        </h3>
                                    </div>
                                )}

                                {/* Links List */}
                                <ul className="space-y-2">
                                    {column.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <a
                                                href="#"
                                                className="block text-sm text-gray-600 hover:text-[#e85d2d] transition-colors duration-200"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenu;