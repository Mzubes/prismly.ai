import React from "react";

function Sidebar() {
  return (
    <div style={{ width: '240px', background: '#f4f4f4', padding: '1rem', borderRight: '1px solid #ccc' }}>
      <h2>Prismly.ai</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><button>🧠 Ask</button></li>
        <li><button>⚖️ Compare</button></li>
        <li><button>🕘 History</button></li>
        <li><button>📈 Analytics</button></li>
        <li><button>⚙️ Settings</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
