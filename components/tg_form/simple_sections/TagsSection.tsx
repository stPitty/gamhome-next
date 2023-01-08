import React, { memo } from "react";
import { Refs } from "../../../common/form_utils/types";

import { setPrimitiveField } from "../../../redux/slicers/formDataSlicer";
import styled from "styled-components";
import { useAppDispatch } from "../../../redux/hooks";
import SectionHeader from "../../tg_form_ui/section_header_ui/SectionHeader";
import TagsContainer from "../../tg_form_ui/tag_ui/TagsContainer";
import Tag from "../../tg_form_ui/tag_ui/Tag";

type Props = {
  refs?: Refs;
  header: string;
  className?: string;
};

const TagsSection: React.FC<Props> = ({ refs, header, className }) => {
  const dispatch = useAppDispatch();

  const handleTagClick = (value: number | boolean | string) => () => {
    dispatch(
      setPrimitiveField({ name: refs!.type, value, addType: refs?.paramType })
    );
  };

  return (
    <Wrapper className={className}>
      <SectionHeader>{header}</SectionHeader>
      <TagsContainer>
        {refs!.refs?.map((el) => {
          return (
            <Tag
              onClickHandler={handleTagClick(el.value)}
              ref={el.ref}
              key={el.children}
            >
              {el.children}
            </Tag>
          );
        })}
      </TagsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default memo(TagsSection);
