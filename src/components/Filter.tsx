import styled from '@emotion/styled'
import { useState } from 'react'
import { FontVariant, Color, Radius } from '@/app/theme'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`

const SelectName = styled.span<{ filtered: boolean }>`
  margin-left: 4px;
  ${FontVariant.body_sm}
  margin-right: 6px;
  color: ${props => (props.filtered ? Color.orange900 : Color.gray700)};
  white-space: nowrap;
`

const SelectBody = styled.div`
  position: relative;
  ${FontVariant.body_md}
  box-sizing: border-box;
`

const Value = styled.span<{ filtered: boolean }>`
  display: flex;
  overflow: hidden;
  border: 1px solid ${props => (props.filtered ? Color.orange900 : Color.gray300)};
  border-radius: ${Radius.md};
  padding: 6px 16px 6px 12px;
  cursor: pointer;
  vertical-align: middle;
  justify-content: space-between;
  text-transform: capitalize;
  color: ${props => (props.filtered ? Color.orange900 : Color.gray700)};
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: ${props => (props.filtered ? Color.orange900 : Color.black)};
  }
`

const OptList = styled.ul`
  position: absolute;
  z-index: 2;
  list-style: none;
  margin-top: 12px;
  padding: 0;
  box-sizing: border-box;
  min-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid ${Color.gray200};
  border-radius: ${Radius.md};
  background-color: ${Color.white};

  .hidden {
    max-height: 0;
    visibility: hidden;
  }
`

const FilterOption = styled.li`
  display: block;
  padding: 6px 12px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: ${Color.gray100};
  }
`

interface Props {
  filterName: string
  optionSet: string[]
  optionSelected: string
  handleOptionChange: (topic: string) => void
}

const isOptionExist = (optionSelected: string) => optionSelected !== 'All'

export default function Filter({ filterName, optionSet, optionSelected, handleOptionChange }: Props) {
  const [optionOpen, setOptionOpen] = useState(false)
  const toggleList = () => setOptionOpen(!optionOpen)
  const onBlur = () => setOptionOpen(false)

  return (
    <Select>
      <SelectName filtered={isOptionExist(optionSelected)}>{filterName}</SelectName>
      <SelectBody onClick={toggleList}>
        <Value filtered={isOptionExist(optionSelected)} onBlur={onBlur} tabIndex={0}>
          {optionSelected}
          {optionOpen ? (
            <IoChevronUpOutline
              size={20}
              color={`${isOptionExist(optionSelected) ? Color.orange900 : Color.gray700}`}
            />
          ) : (
            <IoChevronDownOutline
              size={20}
              color={`${isOptionExist(optionSelected) ? Color.orange900 : Color.gray700}`}
            />
          )}
        </Value>
        {optionOpen && (
          <OptList>
            {optionSet.map(topic => (
              <FilterOption
                key={topic}
                onMouseDown={e => {
                  handleOptionChange(topic)
                  toggleList()
                  e.preventDefault()
                }}
              >
                {topic}
              </FilterOption>
            ))}
          </OptList>
        )}
      </SelectBody>
    </Select>
  )
}
