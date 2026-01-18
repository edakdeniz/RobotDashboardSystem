import { useNavigate, useLocation } from 'react-router-dom';

const tabNames = ['Summary', 'Child'];
const pathMap = { Summary: 'summary', Child: 'session' };

export default function PixelbotNavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const activeTab = tabNames.find(tab => location.pathname.endsWith(pathMap[tab])) || 'Summary';

    function switchTab(tabName) {
        const to = pathMap[tabName] ?? 'summary';
        navigate(to);
    }

    return (
        <div className="pixelbot-navbar">
            {tabNames.map((tabName) => (
                <button
                    key={tabName}
                    className={`tab-button ${activeTab === tabName ? 'active' : ''}`}
                    onClick={() => switchTab(tabName)}
                >
                    {tabName}
                </button>
            ))}
        </div>
    );
}
