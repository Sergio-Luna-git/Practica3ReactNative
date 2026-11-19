import { Stack } from "expo-router"

const StackLayout = () => {

    return (
        <Stack screenOptions={{

        }}
        >
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Productos',
                    headerShown: true,
                    headerStyle: { backgroundColor: 'pink' }

                }}
            />

            <Stack.Screen
                name="favoritos/index"
                options={{
                    title: 'Favoritos',
                    headerShown: true,
                    headerStyle: { backgroundColor: 'lightgreen' }
                }} />








        </Stack>

    )




}
export default StackLayout