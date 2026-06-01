export const useDashboard = () => {
  const isNotificationsSlideoverOpen = useState('boss-notifications-open', () => false)
  return { isNotificationsSlideoverOpen }
}
