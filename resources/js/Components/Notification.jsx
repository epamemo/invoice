import { useEffect, useState } from "react";

function Notification({ props }) {
    const [notification, setNotification] = useState({
        show: null,
    });
    useEffect(() => {
        if (props !== null) {
            setNotification({ ...props });
            setInterval(() => setNotification({ show: false }), 2000);
        }
    }, []);

    return (
        <>
            {notification.show && (
                <div
                    onClick={() => setNotification(false)}
                    className={`alert alert-${notification.statusNotif} shadow-lg w-auto`}
                >
                    <div className="flex gap-2">
                        <box-icon name="party" />

                        <span> {notification.message}</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default Notification;
