
import { Link } from "react-router-dom"
import { PlusIcon } from "lucide-react"

const Navbar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="navbar max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-3xl font-bold text-primary">
                        ThinkBoard
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to="/create" className="btn btn-primary">
                            <PlusIcon className="w-5 h-5" />
                            <span>new Note </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar