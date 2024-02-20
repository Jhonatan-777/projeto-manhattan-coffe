import ContainText from "./containers-texto/ContainText"
import ContainImage from "./containers-imagem/ContainImage"

import { textInfos } from "../../components/components-info/ContainTextInfo"
import { imageInfos } from "../../components/components-info/ContainImageInfo"

const Info = () => {
  return (
    <div>
      {textInfos.map((textInfo, index) => (
      <div key= {textInfo.titulo}>
        <ContainText
          titulo={textInfo.titulo}
          texto={textInfo.texto}
        />
        {index !== textInfos.length - 1 && (
          <ContainImage
            titulo={imageInfos[index].titulo}
            background={imageInfos[index].background}
          />
        )}
      </div>
      ))}
    </div>
  )
}

export default Info