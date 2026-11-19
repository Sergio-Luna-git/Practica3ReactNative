import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const StackScreen = () => {
    return (
        <SafeAreaView>
            <Slot />
        </SafeAreaView>
    )
}

export default StackScreen