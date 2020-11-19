import React, { Component } from "react";
import { CAMPSITES } from "../shared/campsites";
import { PARTNERS } from "../shared/partners";
import { ScrollView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, ListItem } from "react-native-elements";

export function Mission() {
    return (
        <Text>
            We present a curated database of the best campsites in the vast
            woods and backcountry of the World Wide Web Wilderness. We increase
            access to adventure for the public while promoting safe and
            respectful use of resources. The expert wilderness trekkers on our
            staff personally verify each campsite to make sure that they are up
            to our standards. We also present a platform for campers to share
            reviews on campsites they have visited with each other.
        </Text>
    );
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: CAMPSITES,
            partners: PARTNERS,
        };
    }

    static navigationOptions = {
        title: "About Us",
    };

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{
                        source: require("./images/bootstrap-logo.png"),
                    }}
                />
            );
        };

        return (
            <ScrollView>
                <Card title="Our Mission">
                    <Mission />
                </Card>
                <Card title="Community Partners">
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;
