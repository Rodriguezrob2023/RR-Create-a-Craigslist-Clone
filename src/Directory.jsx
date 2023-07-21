export default function Directory() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <select name="view-options">
                <option value="gallery">Gallery</option>
                <option value="list">List</option>
            </select>
            <nav>
                <button>&lt;&lt; Back</button>
                <span>120/3000</span>
                <button>Next &gt;&gt;</button>
            </nav>
        </div>
    )
}