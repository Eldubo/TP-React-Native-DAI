export default function ScreenHome1 () {
    const navigation = useNavigation();

    return (
        <>
    <View style={styles.homeScreen}>
    <Image>
          logo
      </Image>
      <Text style={styles.text}>Bienvenido a el hogar de los jardineros</Text>
      <Button>Comenzar</Button>
    </View>
    </>
  );
}
