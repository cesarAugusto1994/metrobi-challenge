import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../constants/Images';

const Dashboard = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.segment}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('DuplicatedScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>1 - Duplicate</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.duplicatedNumbers }} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('AsyncScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>2 - Async</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.async }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.segment}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('CssScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>3 - CSS</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.css }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('BracketsScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>4 - Brackets</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.brackets }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.segment}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('FloorsScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>5 - Floors</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.floors }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('ParadoxScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>6 - Zeno's Paradox</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.paradox }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.segment}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.push('BagScreen')} style={styles.link}>
                            <View style={styles.cardHeader}>
                                <Text>7 - Bag</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Image style={styles.cardImage} resizeMode='cover' source={{ uri: Images.bag }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    content: {
        margin: 10

    },
    segment: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    card: {
        width: '48%',
    },
    cardHeader: {
        alignItems: 'center'
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 15
    }

})

export default Dashboard;