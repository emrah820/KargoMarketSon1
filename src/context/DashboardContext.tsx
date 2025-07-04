import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'alici-satici' | 'nakliyeci';
export type ActiveSection = 'overview' | 'my-listings' | 'create-load-listing' | 'create-shipment-request' | 'create-transport-service' | 'my-offers' | 'messages' | 'my-ads' | 'create-ad' | 'my-reviews' | 'profile' | 'settings' | 'notifications';

interface DashboardContextType {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  notifications: number;
  setNotifications: (count: number) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
  const [userRole, setUserRole] = useState<UserRole>('alici-satici');
  const [notifications, setNotifications] = useState(3);

  return (
    <DashboardContext.Provider
      value={{
        activeSection,
        setActiveSection,
        userRole,
        setUserRole,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};