import React from 'react'

function IsLoading() {
    return (
    <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse space-x-4">
        <div className="rounded-xl bg-gray-300 h-48 w-48 ml-8"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            
        </div>
        </div>
    </div>
    </div>
    )
}

export default IsLoading
