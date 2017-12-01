import React from 'react';
import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react';
const categoryOptions = [
  { value: 'one', text: 'One' },
  { value: 'two', text: 'Two' }
];

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ options: nextProps.options });
  // }

  // onSelect = (val) => {
  //   console.log(val);
  // }

  render() {
    return (
      <Dropdown 
        placeholder='Category'
        fluid
        selection
        options={categoryOptions}
        style={{height: 43}}
      />
      // <Select
      //     name="searchBox"
      //     className="searchBox"
      //     placeholder="Category"
      //     options={this.state.options}
      //     onChange={this.onSelect}
      //     clearable={false}
      //     style={{ height: 43}}
      // />
    );
  }
}

export default CategoryList;
