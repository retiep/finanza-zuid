import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function LinkedInSync() {
  const { data: session, update } = useSession();
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(session?.user?.lastUpdated);

  const handleSync = async () => {
    setSyncing(true);
    try {
      const response = await fetch('/api/auth/linkedin-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          position: session.user.position,
          company: session.user.company,
          industry: session.user.industry,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to sync LinkedIn data');
      }

      const updatedData = await response.json();
      setLastSync(updatedData.lastUpdated);
      await update(); // Update the session with new data
    } catch (error) {
      console.error('LinkedIn sync error:', error);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          LinkedIn Profile Sync
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Keep your profile information up to date by syncing with LinkedIn.
            Last synced: {lastSync ? new Date(lastSync).toLocaleDateString() : 'Never'}
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            onClick={handleSync}
            disabled={syncing}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {syncing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Syncing...
              </>
            ) : (
              'Sync with LinkedIn'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}