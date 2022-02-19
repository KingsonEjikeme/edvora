import "./filtersNavBar.css";

function FiltersNavBar() {
  return (
    <div className="filters-navbar">
        <div className="filters-container">
            <div className="filters-left">
                <div className="filters-item">Nearest rides</div>
                <div className="filters-item">Upcoming rides (4)</div>
                <div className="filters-item">Past rides (2)</div>
            </div>
            <div className="filters-right">
                <div className="filters-item right"><i class="fas fa-filter"></i> Filter</div>
            </div>
        </div>
    </div>
  )
}

export default FiltersNavBar