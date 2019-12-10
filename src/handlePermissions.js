import { Platform } from 'react-native'
import * as Permissions from 'expo-permissions'

export const requestPermissions = async (permissionDialogTitle, permissionDialogMessage) => {
  if (Platform.OS === 'android') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    // On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest,
    // so check and request should always be true.
    // https://github.com/facebook/react-native-website/blob/master/docs/permissionsandroid.md
    const isAuthorized = status === 'granted'
    return isAuthorized
  }
  return true
}
