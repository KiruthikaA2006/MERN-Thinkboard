import { Zap } from "lucide-react";

const RateLimitedUI = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-primary/10 border border-primary/30 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-center gap-4">

                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                        <Zap className="size-10 text-primary" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
                        <p className="text-base-content mb-1">
                            You've made too many requests in a short time.
                        </p>
                        <p className="text-sm text-base-content/70">
                            Try again in a few seconds for the best experience.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RateLimitedUI;