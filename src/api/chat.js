export const fetchChannels = async (token) => {
      const response = await fetch('/api/v1/channels', {
            headers: {
                  Authorization: `Bearer ${token}`,
            },
      })

      if (!response.ok) {
            throw new Error('Unable to fetch channels');
      }

      return response.json()
}