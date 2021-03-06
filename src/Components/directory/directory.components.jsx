import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {selectDirectorySelections} from "../../redux/directory/directory.selectors"
import MenuItems from "../menu-items/Menu-items.components"
import "./directory.styles.scss";



const  Directory =({sections})=>(
  <div className="directory-menu">
    {sections.map(({id, ...otherSectionProps })=>(
        <MenuItems key ={id} {...otherSectionProps} />
    ))}

    </div>);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})
export default connect(mapStateToProps) (Directory);