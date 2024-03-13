import List from '../../ui/atoms/List'
import Tag from '../../ui/atoms/Tag'
import styles from './TypeList.module.scss'

const TypeList = ({types}) => {
    return <div className={styles.types}>
        <h4>Types :</h4>
        <List
            collection={types}
            uniqueAttr={type => type.type.name}
            render={(type) => <Tag label={type.type.name} />}
            className={styles.typeList}
        />
    </div>
}

export default TypeList
