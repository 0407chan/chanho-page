#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with ComponentName"
 exit 0

fi

FOLDER="components"
FILE_NAME=$1
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

# react file
echo `echo "import React from 'react'
import styled from 'styled-components'
const Container = styled.div\`\`
type Props = {
    prop?:string
}
const ${FILE_NAME}: React.FC<Props> = ({prop}) => {
  return (
    <Container>
      <div>${FILE_NAME}</div>
    </Container>
  )
}
export default ${FILE_NAME};
" > ${FOLDER}/${FILE_NAME}.tsx`