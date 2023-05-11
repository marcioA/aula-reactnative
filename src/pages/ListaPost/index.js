import { Text, View } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../../componentes/Avatar';
import InputContainer from '../../componentes/InputContainer';
import ScrollViewPost from '../../componentes/ScrollViewPost';
import usePosts from '../../hooks/usePosts';
import { useEffect, useState } from 'react';

export default function ListaPost() {
    const [posts, setPosts] = useState([])
    const { evento } = usePosts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function busca() {

            const postsBd = await evento.buscaPosts();
            if (postsBd) {
                setPosts([...postsBd]);
                setLoading(false);
            }
        }
        busca();
    }, []);

    useEffect(() => { console.log(posts) }, [loading])

    const arrData = [
        {
            id: '1',
            userAvatar: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/avatar1.png',
            userName: 'User 1',
            postText:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            postImage: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/post1.png'
        },
        {
            id: '2',
            userAvatar: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/avatar2.png',
            userName: 'User 2',
            postText:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            postImage: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/post2.png'
        },
        {
            id: '3',
            userAvatar: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/avatar3.png',
            userName: 'User 3',
            postText:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            postImage: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/post3.png'
        },
        {
            id: '4',
            userAvatar: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/avatar4.png',
            userName: 'User 4',
            postText:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            postImage: 'https://raw.githubusercontent.com/amandeepmittal/react-native-examples/main/rnStyledComponents/assets/images/post4.png'
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.pageTop}>
                <Avatar imageSource={"https://github.com/marcioA.png"} />
                <InputContainer />
            </View>
            {posts && (

                <ScrollViewPost data={posts} />
            )}
        </View>
    )
}
