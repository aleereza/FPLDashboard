import React from "react"
import { Storage } from "aws-amplify"

class App extends React.Component {
  state = {
    files: [],
    file: "",
  }
  componentDidMount() {
    this.listFiles()
  }
  onChange(e) {
    const file = e.target.files[0]
    Storage.put(file.name, file)
      .then(() => this.listFiles())
      .catch(err => console.log(err))
  }

  listFiles = async () => {
    const files = await Storage.list("")
    this.setState({ files })
  }

  selectFile = async file => {
    const signed = await Storage.get(file.key)
    this.setState({ file: signed })
  }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/png"
          onChange={e => this.onChange(e)}
        />
        <button onClick={this.listFiles}>List Files</button>
        <div>
          {this.state.files.map((file, i) => (
            <p onClick={() => this.selectFile(file)}>{file.key}</p>
          ))}
        </div>
        {this.state.file && <p>{this.state.file}</p>}
      </div>
    )
  }
}

export default App
