import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";

export default function RootLayout() {

  interface IconMenu {
    title: string;
    icon: any;
    focused: boolean;
  }

  const TabBarIcon = ({title, icon, focused}: IconMenu) => {
    if(!focused){
      return (
        <View className="flex flex-column min-w-[112] justify-center items-center mt-4 min-h-16 rounded-full overflow-hidden">
          <Ionicons name={icon} size={20} color='#CEB490'/>
        </View>
      )
    }

    return (
      <View className="flex flex-column min-w-[112] justify-center items-center mt-4 min-h-16 rounded-full overflow-hidden">
        <Ionicons name={icon} size={20} color='#CEB490'/>
        <Text className="color-[##CEB490]">{title}</Text>
      </View>
    )
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        //tabBarActiveTintColor: "#CEB490",
        //tabBarInactiveTintColor: "#000000",
        //tabBarActiveBackgroundColor: "#FF0000",
        //tabBarInactiveBackgroundColor: "#FFFFFF",
        //tabBarActiveBackgroundColor: "#FF0000",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          heigth: 52,
          position: 'absolute',
          oveflow: 'hidden',
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
    <Tabs.Screen name="search" 
        options={{ 
            title: "search", 
            tabBarIcon: ({focused}: IconMenu) => (<TabBarIcon title="search" icon="search-outline" focused={focused}/>),
            //tabBarIcon: ({ color, size }: { color: string; size: number }) => ( <Ionicons name="search-outline" color={color} size={size} />),
            }}/>
    <Tabs.Screen name="index" 
        options={{ 
            title: "Home" ,
            tabBarIcon: ({focused}: IconMenu) => (<TabBarIcon title="home" icon="home-outline" focused={focused}/>),
            //tabBarIcon: ({ color, size }: { color: string; size: number }) => ( <Ionicons name="home-outline" color={color} size={size} />),
        }}/>
    <Tabs.Screen name="saved" 
        options={{ 
            title: "Saved",
            tabBarIcon: ({focused}: IconMenu) => (<TabBarIcon title="saved" icon="bookmark-outline" focused={focused}/>),
            //tabBarIcon: ({ color, size }: { color: string; size: number }) => ( <Ionicons name="bookmark-outline" color={color} size={size} />),
            }}/>
    <Tabs.Screen name="profile" 
        options={{ 
            title: "profile",
            tabBarIcon: ({focused}: IconMenu) => (<TabBarIcon title="profile" icon="person-outline" focused={focused}/>),
            //tabBarIcon: ({ color, size }: { color: string; size: number }) => ( <Ionicons name="person-outline" color={color} size={size} />),
            }}/>
    </Tabs>
)
}
