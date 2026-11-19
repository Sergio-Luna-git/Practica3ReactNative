
import { Link } from 'expo-router'
import { View } from 'react-native'
import CustomButton from '../../../../customButton/CustomButton'

const StackScreen = () => {
    return (
        <View className='flex-1 justify-center items-center px-5 gap-3'>

            <Link href="/products/index" asChild>
                <CustomButton className='w-60 mb-10' color='primary'>Productos</CustomButton>
            </Link>

            <Link href="/favoritos" asChild>
                <CustomButton className='w-60 mb-10' color='secondary'>Favoritos</CustomButton>
            </Link>


        </View>
    )
}

export default StackScreen
