import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-blue-600 text-white py-6 text-center mt-auto">
                <p>&copy; {new Date().getFullYear()} Health Sync. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
